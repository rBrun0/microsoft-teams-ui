import MainAside from '@/components/mainAside/MainAside'
import React from 'react'

const page = () => {

  return (
    <>
    <header className="bg-blue-900 max-w-full h-12 text-white"></header>
    <div className='flex flex-1 max-w-full'>
        <MainAside/>
        
        <main className='w-screen h-screen bg-zinc-900 shadow-sm flex flex-col items-center'>
          <h1 className='text-center mt-36 text-xl font-bold'>As Comunidades das quais você participa aparecerão aqui</h1>
          <p className='text-center text-[13px]'>Comece a criar sua própria comunidade baixando o aplicativo móvel do Teams</p>

{/* comunity informations */}

          <div className='flex items-center justify-center mt-14 space-x-8'>

            <div className='flex space-x-4'>
              <div className='w-16 h-16 bg-zinc-200 rounded-md'></div>
              <div>
                <p className='font-bold text-[13px]'>Localizar <br /> sua comunidade</p>
                <p className='text-[13px]'>Crie um vínculo <br /> com outras pessoas por <br /> interesses compartilhados</p>
              </div>
            </div>

            <div className='flex space-x-4'>
              <div className='w-16 h-16 bg-zinc-200 rounded-md'></div>
              <div>
                <p className='font-bold text-[13px]'>Localizar <br /> sua comunidade</p>
                <p className='text-[13px]'>Crie um vínculo <br /> com outras pessoas por <br /> interesses compartilhados</p>
              </div>
            </div>

            <div className='flex space-x-4'>
              <div className='w-16 h-16 bg-zinc-200 rounded-md'></div>
              <div>
                <p className='font-bold text-[13px]'>Localizar <br /> sua comunidade</p>
                <p className='text-[13px]'>Crie um vínculo <br /> com outras pessoas por <br /> interesses compartilhados</p>
              </div>
            </div>


          </div>

          <button className='bg-blue-700 text-sm text-white w-60 h-6  rounded-md mt-10 hover:bg-blue-600 transition-colors'>Introdução no dispositivo movel</button>
        </main>
    </div>
    </>
  )
}

export default page