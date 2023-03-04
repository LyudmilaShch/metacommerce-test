import React, { createContext, useContext, useMemo, useState } from 'react';

const EditModeContext = createContext<any>(false);

export function useEditMode() {
  return useContext(EditModeContext);
}

export function EditModeProvider({ children }: any) {
  const [editMode, setEditMode] = useState(false);

  const onSetEditMode = (value: boolean) => {
    setEditMode(value);
  };

  const value = useMemo(() => ({ editMode, onSetEditMode }), [editMode]);

  return <EditModeContext.Provider value={value}>{children}</EditModeContext.Provider>;
}
