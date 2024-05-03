
const Error = ({ message }) => {

  const reload = () => {
    window.location.reload();
  };

  return (
    <dialog className='w-full h-full flex items-center justify-center backdrop-filter z-50 bg-gray-600 bg-opacity-30 fixed top-0 left-0 right-0 bottom-0'>
      <div className="absolute bg-white rounded-2xl shadow-2xl w-11/12 ms:w-full max-w-md overflow-auto pb-7 ms:px-0 px-2">
        <div className="grid place-content-center p-4">
          <div className="text-center">
            <h1 className="text-xl font-black text-gray-900">Algo salió mal!</h1>

            <p className="mt-4 text-gray-500">{message}</p>

            <button
              onClick={reload}
              className="mt-6 inline-block rounded bg-gray-400 px-5 py-3 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring"
            >
              Volver a intentar
            </button>
          </div>
        </div>           
      </div>
    </dialog>
  )
}

export default Error