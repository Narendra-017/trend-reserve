import React, { useState } from 'react'

const Search = ({ onSearch }) => {
  const [input, setInput] = useState('')

  return (
    <div className="flex space-x-2 mb-5">
      <input
        type="text"
        placeholder="Enter LR Number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="px-4 py-2 border rounded-lg md:w-[700px]"
      />
      <button
        onClick={() => onSearch(input)}
        className="px-4 py-2 bg-gray-950 text-white rounded-lg text-lg"
      >
        Search
      </button>
    </div>
  )
}

export default Search
