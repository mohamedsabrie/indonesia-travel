

function HeaderLink({title, Icon}) {
    return (
        <div className="hidden md:flex items-center space-x-2 cursor-pointer">
            <p className="whitespace-nowrap">{title}</p>
            {Icon && (
              <Icon className="h-5" />  
            )}
            
            
        </div>
    )
}

export default HeaderLink
