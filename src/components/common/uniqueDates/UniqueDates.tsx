import { NoteType } from 'components';

export const UniqueDates = (notesData: NoteType[]) =>
  notesData
    .map(n => Intl.DateTimeFormat('en-GB').format(n.date))
    .reduce((acc: string[], item: string) => {
      if (acc.includes(item)) {
        return acc;
      }
      return [...acc, item];
    }, []);
