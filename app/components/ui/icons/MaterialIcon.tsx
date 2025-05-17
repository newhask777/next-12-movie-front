import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'
import { TypeMaterialIconName } from '@/shared/types/icons.types'

const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
  const IconComponent = MaterialIcons[name]

  if (!IconComponent) {
    return <MaterialIcons.MdDragIndicator />
  }

  return <IconComponent />
}

export default MaterialIcon