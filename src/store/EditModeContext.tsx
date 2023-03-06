import React, { createContext, useContext, useMemo, useState } from 'react';

export interface EditModeContextProps {
  editMode: boolean;
  onSetEditMode: (value: boolean) => void;
}

const EditModeContext = createContext<EditModeContextProps>({} as EditModeContextProps);

export function useEditMode() {
  return useContext(EditModeContext);
}

export function EditModeProvider({ children }: { children: React.ReactNode }) {
  const [editMode, setEditMode] = useState(false);

  const onSetEditMode = (value: boolean) => {
    setEditMode(value);
  };

  const value = useMemo(() => ({ editMode, onSetEditMode }), [editMode]);

  return <EditModeContext.Provider value={value}>{children}</EditModeContext.Provider>;
}
