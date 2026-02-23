const categoryImageMap = {
    'healing stones': 'https://images.unsplash.com/photo-1610450949015-c231777d5d95?q=80&w=900&auto=format&fit=crop',
    'crystal jewelry': 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=900&auto=format&fit=crop',
    'reiki tools': 'https://images.unsplash.com/photo-1590422749897-40899033321d?q=80&w=900&auto=format&fit=crop',
    'vastu & feng shui': 'https://images.unsplash.com/photo-1596439535105-bb59e5504c41?q=80&w=900&auto=format&fit=crop'
};

const keywordImageMap = [
    { keyword: 'amethyst', image: 'https://images.unsplash.com/photo-1615486363973-f79d8757803d?q=80&w=900&auto=format&fit=crop' },
    { keyword: 'rose quartz', image: 'https://images.unsplash.com/photo-1641363133700-14f5f43ff053?q=80&w=900&auto=format&fit=crop' },
    { keyword: 'clear quartz', image: 'https://images.unsplash.com/photo-1523348830708-15d4a09cfac2?q=80&w=900&auto=format&fit=crop' },
    { keyword: 'citrine', image: 'https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?q=80&w=900&auto=format&fit=crop' },
    { keyword: 'tourmaline', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=900&auto=format&fit=crop' },
    { keyword: 'lapis', image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=900&auto=format&fit=crop' },
    { keyword: 'pendulum', image: 'https://images.unsplash.com/photo-1601821765780-754fa98637c1?q=80&w=900&auto=format&fit=crop' },
    { keyword: 'chakra', image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=900&auto=format&fit=crop' },
    { keyword: 'bracelet', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=900&auto=format&fit=crop' },
    { keyword: 'ring', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=900&auto=format&fit=crop' },
    { keyword: 'mala', image: 'https://images.unsplash.com/photo-1634757796423-6e941a3bca4f?q=80&w=900&auto=format&fit=crop' }
];

export const resolveProductImage = (product = {}) => {
    const rawImage = product.image;

    if (rawImage && rawImage !== 'default.jpg') {
        if (rawImage.startsWith('http://') || rawImage.startsWith('https://') || rawImage.startsWith('/')) {
            return rawImage;
        }
        return `/uploads/products/${rawImage}`;
    }

    const combinedText = `${product.name || ''} ${product.category?.name || ''}`.toLowerCase();
    const keywordMatch = keywordImageMap.find((item) => combinedText.includes(item.keyword));
    if (keywordMatch) {
        return keywordMatch.image;
    }

    const categoryKey = (product.category?.name || '').toLowerCase();
    if (categoryImageMap[categoryKey]) {
        return categoryImageMap[categoryKey];
    }

    return 'https://images.unsplash.com/photo-1523348830708-15d4a09cfac2?q=80&w=900&auto=format&fit=crop';
};
