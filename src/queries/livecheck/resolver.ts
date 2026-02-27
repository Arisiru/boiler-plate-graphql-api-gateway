const resolver = {
  livecheck: async (): Promise<{ status: string }> => ({
    status: 'OK',
  }),
};

export default resolver;
