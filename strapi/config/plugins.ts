const plugins: Record<string, any> = () => ({
  i18n: {
    enabled: true,
    config: {
      defaultLocale: 'vi', // Ngôn ngữ mặc định
      locales: ['en', 'vi', 'fr'], // Danh sách các ngôn ngữ được hỗ trợ
    },
  },
  documentation: {
    enabled: true,
  },
});

export default plugins;
