export default function LogoDisplay() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="flex flex-col items-center space-y-4">
        {/* Stylized P logo */}
        <div className="w-24 h-24 mb-2">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
              d="M50 20C38 20 28 30 28 42C28 54 38 64 50 64H60C72 64 82 54 82 42C82 30 72 20 60 20H50ZM50 36C44 36 44 48 50 48H60C66 48 66 36 60 36H50Z"
              fill="white"
              strokeWidth="0"
            />
          </svg>
        </div>

        {/* AGÊNCIA PONTES text */}
        <h1 className="text-5xl font-bold tracking-wider">AGÊNCIA PONTES</h1>

        {/* inteligência artificial text */}
        <p className="text-xl tracking-wide">inteligência artificial</p>
      </div>
    </div>
  )
}

