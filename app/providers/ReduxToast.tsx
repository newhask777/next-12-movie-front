// import {FC} from 'react'
// import ReduxToastrLib from 'react-redux-toastr'

// const ReduxToast:FC = () => {
// 	return (
// 		<ReduxToastrLib 
// 			newestOnTop={false}
// 			preventDuplicates
// 			progressBar
// 			closeOnToastrClick
// 			timeOut={4000}
// 			transitionIn='fadeIn'
// 			transitionOut='fadeOut'
// 		/>
// 	)
// }

// export default ReduxToast

import { useEffect, useState } from 'react';
import ReduxToastrLib  from 'react-redux-toastr';

export default function ReduxToast() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <ReduxToastrLib
     	newestOnTop={false}
			preventDuplicates
			progressBar
			closeOnToastrClick
			timeOut={4000}
			transitionIn='fadeIn'
			transitionOut='fadeOut'
    />
  );
}