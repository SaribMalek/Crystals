(() => {
    const isModifiedClick = (event) => event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    let suppressNextBeforeUnloadLoader = false;

    const resolveThemeFromPreference = () => {
        if (!document.body) {
            return null;
        }

        const storedPreference = localStorage.getItem('ea/colorScheme')
            || document.body.getAttribute('data-ea-default-color-scheme')
            || 'auto';

        if (storedPreference === 'dark' || storedPreference === 'light') {
            return storedPreference;
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const syncAdminThemeClass = () => {
        if (!document.body) {
            return;
        }

        const resolvedTheme = resolveThemeFromPreference();
        if (resolvedTheme === 'dark' || resolvedTheme === 'light') {
            // Keep EasyAdmin and custom theme flags aligned with persisted preference.
            document.body.setAttribute('data-bs-theme', resolvedTheme);
            document.body.style.colorScheme = resolvedTheme;
            document.body.classList.toggle('ea-dark-scheme', resolvedTheme === 'dark');
            document.body.classList.toggle('ea-light-scheme', resolvedTheme === 'light');
        }

        const bodyTheme = document.body.getAttribute('data-bs-theme');
        const htmlTheme = document.documentElement.getAttribute('data-bs-theme');
        const isDark = resolvedTheme === 'dark'
            || document.body.classList.contains('ea-dark-scheme')
            || bodyTheme === 'dark'
            || htmlTheme === 'dark';
        document.body.classList.toggle('admin-dark', isDark);
    };

    const createAdminLoader = () => {
        if (!document.body) {
            return null;
        }

        const existing = document.getElementById('admin-site-loader');
        if (existing) {
            return existing;
        }

        const loader = document.createElement('div');
        loader.id = 'admin-site-loader';
        loader.setAttribute('role', 'status');
        loader.setAttribute('aria-live', 'polite');
        loader.setAttribute('aria-label', 'Loading admin page');
        loader.style.cssText = 'position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 18% 20%, rgba(15,76,129,.18), rgba(245,247,251,.92) 38%, rgba(245,247,251,.94) 100%);backdrop-filter:blur(10px) saturate(110%);-webkit-backdrop-filter:blur(10px) saturate(110%);transition:opacity .24s ease,visibility .24s ease;opacity:1;visibility:visible;pointer-events:auto;';
        loader.innerHTML = ''
            + '<div style="display:flex;flex-direction:column;align-items:center;gap:14px;">'
            + '  <div style="position:relative;width:70px;height:70px;">'
            + '    <span style="position:absolute;inset:8px;border-radius:50%;background:radial-gradient(circle,#d6e6f8 0%,rgba(214,230,248,0) 72%);animation:adminLoaderPulse 1.6s ease-in-out infinite;"></span>'
            + '    <span style="position:absolute;inset:0;border-radius:50%;border:3px solid rgba(31,59,97,.2);border-top-color:#caa45d;border-right-color:#1f3b61;animation:adminLoaderSpin .9s linear infinite;"></span>'
            + '    <span style="position:absolute;inset:14px;border-radius:50%;border:2px solid rgba(31,59,97,.22);border-bottom-color:#caa45d;animation:adminLoaderSpinReverse 1.3s linear infinite;"></span>'
            + '  </div>'
            + '  <div style="font-family:Inter,Segoe UI,sans-serif;font-size:11px;font-weight:700;letter-spacing:2.2px;text-transform:uppercase;color:#1f3b61;opacity:.9;animation:adminLoaderText .95s ease-in-out infinite;">Loading</div>'
            + '</div>';
        document.body.appendChild(loader);

        if (!document.getElementById('admin-loader-keyframes')) {
            const style = document.createElement('style');
            style.id = 'admin-loader-keyframes';
            style.textContent = ''
                + '@keyframes adminLoaderSpin{to{transform:rotate(360deg)}}'
                + '@keyframes adminLoaderSpinReverse{to{transform:rotate(-360deg)}}'
                + '@keyframes adminLoaderPulse{0%,100%{transform:scale(.86);opacity:.45}50%{transform:scale(1.08);opacity:.95}}'
                + '@keyframes adminLoaderText{0%,100%{opacity:.45;transform:translateY(0)}50%{opacity:1;transform:translateY(-1px)}}'
                + 'body.admin-loader-active .wrapper,body.admin-loader-active .content-wrapper,body.admin-loader-active .sidebar-wrapper{filter:blur(3px);transition:filter .18s ease;}';
            document.head.appendChild(style);
        }

        return loader;
    };

    const showAdminLoader = () => {
        const loader = createAdminLoader();
        if (!loader) {
            return;
        }

        document.body.classList.add('admin-loader-active');
        loader.style.opacity = '1';
        loader.style.visibility = 'visible';
        loader.style.pointerEvents = 'auto';
    };

    const hideAdminLoader = () => {
        const loader = createAdminLoader();
        if (!loader) {
            return;
        }

        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        loader.style.pointerEvents = 'none';
        document.body.classList.remove('admin-loader-active');
    };

    const relocateCrudActionsToFormBottom = () => {
        const isCrudFormPage = document.body?.classList.contains('ea-new')
            || document.body?.classList.contains('ea-edit');
        if (!isCrudFormPage) {
            return;
        }

        const form = document.querySelector('form.ea-new-form, form.ea-edit-form');
        const header = document.querySelector('.content-header');
        const headerActions = header?.querySelector('.page-actions');
        if (!(form instanceof HTMLFormElement) || !(header instanceof HTMLElement) || !(headerActions instanceof HTMLElement)) {
            return;
        }

        if (headerActions.closest('.ea-form-tail-actions')) {
            header.classList.add('ea-actions-relocated');
            return;
        }

        if (document.querySelector('.ea-form-tail-actions[data-actions-relocated="1"]')) {
            header.classList.add('ea-actions-relocated');
            return;
        }

        const tail = document.createElement('div');
        tail.className = 'ea-form-tail-actions';
        tail.dataset.actionsRelocated = '1';
        tail.appendChild(headerActions);
        form.insertAdjacentElement('afterend', tail);
        header.classList.add('ea-actions-relocated');
    };

    const ensureDatagridScrollContainer = () => {
        if (!document.body?.classList.contains('ea-index')) {
            return;
        }

        const tables = Array.from(document.querySelectorAll('#main > table.datagrid, #main table.datagrid'));
        if (tables.length === 0) {
            return;
        }

        tables.forEach((table) => {
            if (!(table instanceof HTMLTableElement)) {
                return;
            }

            if (table.parentElement?.classList.contains('ea-datagrid-scroll-wrap')) {
                return;
            }

            const wrap = document.createElement('div');
            wrap.className = 'ea-datagrid-scroll-wrap';
            table.parentNode?.insertBefore(wrap, table);
            wrap.appendChild(table);
        });
    };

    const normalizeSidebarActiveState = () => {
        const menuRoot = document.querySelector('#main-menu');
        if (!(menuRoot instanceof HTMLElement)) {
            return;
        }

        const currentUrl = new URL(window.location.href);
        const currentController = currentUrl.searchParams.get('crudControllerFqcn');
        const currentAction = (currentUrl.searchParams.get('crudAction') || 'index').toLowerCase();
        if (!currentController) {
            return;
        }

        const matchingItems = [];
        const links = Array.from(menuRoot.querySelectorAll('a[href]'));
        links.forEach((link) => {
            if (!(link instanceof HTMLAnchorElement)) {
                return;
            }

            let linkUrl;
            try {
                linkUrl = new URL(link.href, window.location.origin);
            } catch (e) {
                return;
            }

            const linkController = linkUrl.searchParams.get('crudControllerFqcn');
            if (linkController !== currentController) {
                return;
            }

            const menuItem = link.closest('.menu-item');
            if (!(menuItem instanceof HTMLElement)) {
                return;
            }

            const linkAction = (linkUrl.searchParams.get('crudAction') || 'index').toLowerCase();
            matchingItems.push({ menuItem, linkAction });
        });

        if (matchingItems.length < 2) {
            return;
        }

        const preferredAction = currentAction === 'new' ? 'new' : 'index';
        const preferredItems = matchingItems.filter((item) => item.linkAction === preferredAction);
        const nonPreferredItems = matchingItems.filter((item) => item.linkAction !== preferredAction);

        if (preferredItems.length === 0 || nonPreferredItems.length === 0) {
            return;
        }

        nonPreferredItems.forEach((item) => {
            item.menuItem.classList.remove('active');
        });

        preferredItems.forEach((item) => {
            item.menuItem.classList.add('active');
        });
    };

    const removeTomSelectPlaceholderInputs = () => {
        const selectors = [
            '.ts-wrapper.single .ts-control > input.items-placeholder',
            '.ts-wrapper.form-select.single .ts-control > input.items-placeholder'
        ];

        document.querySelectorAll(selectors.join(',')).forEach((input) => {
            if (input instanceof HTMLInputElement) {
                input.remove();
            }
        });
    };

    const isLikelyDownloadRequest = (url, link) => {
        const href = `${url.pathname}${url.search}`.toLowerCase();
        const linkText = (link.textContent || '').trim().toLowerCase();

        if (
            href.includes('/export/')
            || href.includes('format=csv')
            || href.includes('format=excel')
            || href.includes('format=xlsx')
            || href.includes('download=')
            || href.includes('gdpr-export')
            || href.endsWith('.csv')
            || href.endsWith('.xlsx')
            || href.endsWith('.xls')
            || href.endsWith('.json')
        ) {
            return true;
        }

        if (
            linkText.includes('export csv')
            || linkText.includes('export excel')
            || linkText.includes('download')
            || linkText.includes('export')
        ) {
            return true;
        }

        return false;
    };

    const shouldShowLoaderForLink = (link, event) => {
        if (!(link instanceof HTMLAnchorElement)) {
            return false;
        }

        if (isModifiedClick(event) || event.button !== 0) {
            return false;
        }

        if (link.hasAttribute('download') || link.getAttribute('target') === '_blank') {
            return false;
        }

        if (link.getAttribute('data-bs-toggle') || link.getAttribute('role') === 'button') {
            return false;
        }

        const href = (link.getAttribute('href') || '').trim();
        if (href === '' || href === '#' || href.startsWith('javascript:')) {
            return false;
        }

        try {
            const url = new URL(link.href, window.location.href);
            if (url.origin !== window.location.origin) {
                return false;
            }

            if (isLikelyDownloadRequest(url, link)) {
                return false;
            }

            const currentUrl = new URL(window.location.href);
            const samePage = url.pathname === currentUrl.pathname && url.search === currentUrl.search && url.hash !== '';
            if (samePage) {
                return false;
            }
        } catch (e) {
            return false;
        }

        return true;
    };

    createAdminLoader();
    syncAdminThemeClass();
    relocateCrudActionsToFormBottom();
    ensureDatagridScrollContainer();
    normalizeSidebarActiveState();
    removeTomSelectPlaceholderInputs();

    window.addEventListener('DOMContentLoaded', () => {
        syncAdminThemeClass();
        relocateCrudActionsToFormBottom();
        ensureDatagridScrollContainer();
        normalizeSidebarActiveState();
        removeTomSelectPlaceholderInputs();
    });
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', syncAdminThemeClass);
    window.addEventListener('load', () => {
        syncAdminThemeClass();
        relocateCrudActionsToFormBottom();
        ensureDatagridScrollContainer();
        normalizeSidebarActiveState();
        removeTomSelectPlaceholderInputs();
        hideAdminLoader();
    }, { once: true });
    window.addEventListener('pageshow', () => {
        syncAdminThemeClass();
        ensureDatagridScrollContainer();
        normalizeSidebarActiveState();
        removeTomSelectPlaceholderInputs();
        hideAdminLoader();
    });

    const observer = new MutationObserver(() => {
        syncAdminThemeClass();
        ensureDatagridScrollContainer();
        normalizeSidebarActiveState();
        removeTomSelectPlaceholderInputs();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-bs-theme', 'class'] });
    if (document.body) {
        observer.observe(document.body, { attributes: true, attributeFilter: ['data-bs-theme', 'class'] });
    }

    document.addEventListener('click', (event) => {
        const target = event.target;
        if (!(target instanceof Element)) {
            return;
        }

        if (target.closest('[data-ea-color-scheme]')) {
            window.setTimeout(syncAdminThemeClass, 0);
            window.setTimeout(syncAdminThemeClass, 120);
            window.setTimeout(syncAdminThemeClass, 300);
        }

        const link = target.closest('a[href]');
        if (link instanceof HTMLAnchorElement) {
            try {
                const linkUrl = new URL(link.href, window.location.href);
                if (isLikelyDownloadRequest(linkUrl, link) || link.hasAttribute('download')) {
                    suppressNextBeforeUnloadLoader = true;
                    window.setTimeout(() => {
                        suppressNextBeforeUnloadLoader = false;
                    }, 2500);
                }
            } catch (e) {
                // no-op: invalid URL should not break click handling
            }
        }

        if (shouldShowLoaderForLink(link, event)) {
            showAdminLoader();
        }
    }, true);

    document.addEventListener('submit', (event) => {
        const form = event.target;
        if (!(form instanceof HTMLFormElement)) {
            return;
        }

        if (form.getAttribute('target') === '_blank') {
            return;
        }

        showAdminLoader();
    }, true);

    window.addEventListener('beforeunload', () => {
        if (suppressNextBeforeUnloadLoader) {
            return;
        }
        showAdminLoader();
    });

    window.setTimeout(syncAdminThemeClass, 500);
    window.setTimeout(hideAdminLoader, 1800);
})();
