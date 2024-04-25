const Modal = ({ children, onClose, isOpen }) => {

  const handleCloseModal = () => {
    onClose(false);
  };

  return (
    <>
      {
        isOpen &&
        <dialog open={isOpen} className='w-full h-full flex items-center justify-center backdrop-filter z-50 bg-gray-600 bg-opacity-30 fixed top-0 left-0 right-0 bottom-0'>
          <div className="absolute bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="h-14 flex items-center px-6">
              <div className="cursor-pointer ml-auto text-color-muted" onClick={ handleCloseModal }>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </div>
            </div>
            { children }
          </div>
        </dialog>
      }
    </>
  )
}

export default Modal