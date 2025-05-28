export const TEST_IDS = {
  MULTI_SELECT: {
    ROOT: (field: string) => `multiselect-${field}`,
    MENU_ITEM: (field: string, option: string) =>
      `multiselect-${field}-option-${option}`,
  },
};
