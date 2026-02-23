(() => {
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
        if (!document.body || document.getElementById('admin-site-loader')) {
            return;
        }

        const loader = document.createElement('div');
        loader.id = 'admin-site-loader';
        loader.setAttribute('role', 'status');
        loader.setAttribute('aria-live', 'polite');
        loader.setAttribute('aria-label', 'Loading admin page');
        loader.style.cssText = 'position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:#f5f7fb;transition:opacity .2s ease,visibility .2s ease;';
        loader.innerHTML = '<div style="width:46px;height:46px;border:3px solid rgba(31,59,97,.2);border-top-color:#caa45d;border-radius:50%;animation:adminLoaderSpin .8s linear infinite;"></div>';
        document.body.appendChild(loader);

        if (!document.getElementById('admin-loader-keyframes')) {
            const style = document.createElement('style');
            style.id = 'admin-loader-keyframes';
            style.textContent = '@keyframes adminLoaderSpin{to{transform:rotate(360deg)}}';
            document.head.appendChild(style);
        }
    };

    const hideAdminLoader = () => {
        const loader = document.getElementById('admin-site-loader');
        if (!loader) {
            return;
        }

        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        window.setTimeout(() => {
            if (loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }, 220);
    };

    createAdminLoader();
    syncAdminThemeClass();

    window.addEventListener('DOMContentLoaded', syncAdminThemeClass);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', syncAdminThemeClass);
    window.addEventListener('load', () => {
        syncAdminThemeClass();
        hideAdminLoader();
    }, { once: true });

    const observer = new MutationObserver(() => {
        syncAdminThemeClass();
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
    });

    window.setTimeout(syncAdminThemeClass, 500);
    window.setTimeout(hideAdminLoader, 1800);
})();
