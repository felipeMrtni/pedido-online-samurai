import { useSnack } from '../../../hooks/useSnack'

import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Burgers() {
  const { burgers } = useSnack()

  return (
    <>
      <Head title='Hamburgeres' />
      <SnackTitle>Hambúrgeres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
