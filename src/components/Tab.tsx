
function Tab({ text = 'tab-default' }) {
    return (
        <div className="bg-gray-700 border border-gray-600 w-fit py-1 px-3 rounded-full text-sm text-gray-300">
            {text}
        </div>
    )
}

export default Tab