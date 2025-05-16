import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIconName } from '@/shared/types/icons.types'
// import { useRenderClient } from '@/hooks/useRenderClient'

const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	// const { isRenderClient } = useRenderClient()

	const IconComponent = MaterialIcons[name]

	return <IconComponent /> || <MaterialIcons.MdDragIndicator />
}

export default MaterialIcon