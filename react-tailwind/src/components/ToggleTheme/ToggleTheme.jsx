import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

export default function ToggleTheme(){
    const toggle = () => {
        document.documentElement.classList.toggle('dark')
    }
    return <div className="hidden sm:block">
        <MoonIcon className="h-8 text-gray-900 block dark:hidden cursor-pointer" onClick={toggle}></MoonIcon>
        <SunIcon className="h-8 text-gray-100 hidden dark:block cursor-pointer" onClick={toggle}></SunIcon>
    </div>
}