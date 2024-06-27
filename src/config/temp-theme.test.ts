import { colors, styles } from './temp-theme';

describe('temp-theme', () => {
  it('has the correct colors', () => {
    expect(colors).toEqual({
      darkGray: '#373A40',
      lightGray: '#686D76',
      title: '#7776B3',
      text: '#000000',
      background: '#EEEEEE',
    });
  });

  it('has the correct styles', () => {
    expect(styles.background).toBeDefined();
    expect(styles.title).toBeDefined();
    expect(styles.tempInput).toBeDefined();
    expect(styles.tempText).toBeDefined();
    expect(styles.tempSelect).toBeDefined();
    expect(styles.tempButton).toBeDefined();
    expect(styles.tempResult).toBeDefined();
  });
});