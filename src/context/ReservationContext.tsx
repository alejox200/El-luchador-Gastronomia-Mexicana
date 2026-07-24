import React, { createContext, useContext, useState } from 'react';
import { ReservationConfirmation } from '../types/reservation';

interface ReservationContextType {
  isModalOpen: boolean;
  openReservationModal: () => void;
  closeReservationModal: () => void;
  lastConfirmation: ReservationConfirmation | null;
  setLastConfirmation: (conf: ReservationConfirmation | null) => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export const ReservationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastConfirmation, setLastConfirmation] = useState<ReservationConfirmation | null>(null);

  const openReservationModal = () => setIsModalOpen(true);
  const closeReservationModal = () => setIsModalOpen(false);

  return (
    <ReservationContext.Provider
      value={{
        isModalOpen,
        openReservationModal,
        closeReservationModal,
        lastConfirmation,
        setLastConfirmation,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservation debe ser usado dentro de un ReservationProvider');
  }
  return context;
};
