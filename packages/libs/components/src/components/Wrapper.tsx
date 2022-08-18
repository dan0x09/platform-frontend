import React from "react"

interface ApplicationWrapperProps {
	children: React.ReactNode
}

export const ApplicationWrapper: React.FC<ApplicationWrapperProps> = ({children}) => {

	return (
		<div className='_ApplicationWrapper ApplicationWrapper'>
			{children}
		</div>
	)
}