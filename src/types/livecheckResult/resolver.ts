const livecheckResultResolver = {
  LivecheckResult: {
    status: ({ status }: { status: string }) => status,
  },
};

export default livecheckResultResolver;
