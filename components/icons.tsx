export const BotIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot">
            <rect width="18" height="10" x="3" y="11" rx="2"></rect>
            <circle cx="12" cy="5" r="2"></circle>
            <path d="M12 7v4"></path>
            <line x1="8" x2="8" y1="16" y2="16"></line>
            <line x1="16" x2="16" y1="16" y2="16"></line>
        </svg>
    )
}
export const UserIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    )
}
export const SendIcon = ({ disabled} : {disabled: boolean}) => {
    return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className={`h-4 w-4 ${disabled ? 'text-gray-300' : 'text-white'}`} strokeWidth="2">
                <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor"></path>
            </svg>
    )
}