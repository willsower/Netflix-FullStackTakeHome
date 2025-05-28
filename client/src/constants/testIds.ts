export const TEST_IDS = {
  SELECT_INPUT: {
    ROOT: (field: string) => `select-${field}`,
    MENU_ITEM: (field: string, option: string) =>
      `select-${field}-option-${option}`,
  },
};
