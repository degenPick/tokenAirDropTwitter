"use client";
import StepperModal from "@/components/StepperModal";
import VerifiedModal from "@/components/VerifiedModal";
import { useState } from "react";

export default function NotificationArea({name,followers,twittUsername,isTwitterVerified, message}) {
  const [ isOpen, setIsopen ] = useState(false);
  const [ isOpenModal, setIsOpenModal ]= useState(false);

  const setOpenModal = () => {
    if (!isTwitterVerified) {
      setIsopen(true);
    } else {
      setIsOpenModal(true);
    }
  }

  return (
    <>
      <div onClick={setOpenModal} className='bg-[#241008] text-white transition-all flex gap-2 items-center content-center px-8 py-2 rounded-md text-[16px] hover:rounded-none cursor-pointer w-fit'>
        <div className="w-8 h-8 pt-1">
          <svg viewBox="0 0 160 160" fill="white">
            <path d="M128.8,49.01C126.1,23.92,105.13,5,80,5S33.9,23.92,31.2,49.01c-0.24,2.27,0.49,4.54,2.01,6.22  c1.5,1.67,3.64,2.63,5.87,2.63h2.55l7.54,8.09l14.21,38.77c-6.83,5.09-11.26,13.23-11.26,22.38c0,15.39,12.51,27.9,27.88,27.9  s27.88-12.51,27.88-27.9c0-9.15-4.43-17.29-11.26-22.38l14.21-38.77l7.54-8.09h2.55c2.23,0,4.37-0.96,5.87-2.62  C128.31,53.55,129.04,51.28,128.8,49.01z M48.46,57.86h5.76l-2.88,3.09L48.46,57.86z M54.22,65.2l6.68-7.18l7.17,7.71l4.31,34.54  c-1.61,0.46-3.17,1.06-4.65,1.79L54.22,65.2z M86.93,65.46L82.7,99.34c-0.89-0.09-1.79-0.13-2.7-0.13s-1.81,0.04-2.7,0.13  l-4.23-33.88L80,58.02L86.93,65.46z M86.67,57.86h5.76l-2.88,3.09L86.67,57.86z M70.45,60.95l-2.88-3.09h5.76L70.45,60.95z   M100.88,127.1c0,11.53-9.37,20.9-20.88,20.9s-20.88-9.37-20.88-20.9c0-11.52,9.37-20.89,20.88-20.89S100.88,115.58,100.88,127.1z   M92.27,102.06c-1.48-0.73-3.04-1.33-4.65-1.79l4.31-34.54l7.17-7.71l6.68,7.18L92.27,102.06z M108.66,60.95l-2.88-3.09h5.76  L108.66,60.95z M121.58,50.56c-0.12,0.13-0.33,0.3-0.66,0.3H39.08c-0.33,0-0.54-0.17-0.66-0.3s-0.3-0.4-0.25-0.81  C40.47,28.23,58.46,12,80,12s39.53,16.23,41.83,37.75C121.88,50.16,121.7,50.43,121.58,50.56z"/><path d="M89.76,133.31c0.98,0.98,0.98,2.56,0,3.54c-1.11,1.11-2.39,1.99-3.76,2.66v2.69c0,1.38-1.12,2.5-2.5,2.5s-2.5-1.12-2.5-2.5  v-1.37c-0.33,0.03-0.65,0.05-0.98,0.05c-0.32,0-0.64-0.02-0.97-0.05v1.37c0,1.38-1.11,2.5-2.5,2.5c-1.38,0-2.5-1.12-2.5-2.5v-2.69  c-1.37-0.67-2.65-1.55-3.76-2.66c-2.6-2.61-4.03-6.07-4.03-9.75c0-3.68,1.43-7.14,4.03-9.74c1.11-1.11,2.39-2,3.76-2.66v-2.69  c0-1.38,1.12-2.5,2.5-2.5c1.39,0,2.5,1.12,2.5,2.5v1.36c0.33-0.02,0.65-0.04,0.97-0.04c0.33,0,0.65,0.02,0.98,0.04v-1.36  c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5v2.69c1.37,0.66,2.65,1.55,3.76,2.66c0.98,0.98,0.98,2.56,0,3.54  c-0.98,0.97-2.56,0.97-3.54,0c-1.65-1.66-3.85-2.57-6.2-2.57c-2.34,0-4.54,0.91-6.19,2.57c-1.66,1.65-2.57,3.86-2.57,6.2  c0,2.35,0.91,4.55,2.57,6.21c1.65,1.66,3.85,2.57,6.19,2.57c2.35,0,4.55-0.91,6.2-2.57C87.2,132.33,88.78,132.33,89.76,133.31z"/>
          </svg>
        </div>        
        <span className="w-full text-center">Participate In Airdrop</span>
      </div>
      <StepperModal isOpen={isOpen} setIsOpen={setIsopen} name={name} followers={followers} twittUsername={twittUsername}/>
      <VerifiedModal title="Your participation has been registered!" text="Congratulations on verifying your account. Our admin team will take this into consideration and will send a gift your way if eligible." isOpen={isOpenModal} setIsOpen={setIsOpenModal}/>
    </>
  );
}
