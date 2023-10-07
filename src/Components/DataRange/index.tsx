import { DataInput } from '../Input'
import { Stack } from '..'
import { useData } from '../../Context'

export const DataRange = () => {
  const { finallyRange, initRange, setInitRange, setFinallyRange } = useData()

  return (
    <Stack flex as="form" onSubmit={(e) => e.preventDefault()}>
      <DataInput
        label="Inicio"
        value={initRange}
        onChange={({ target }) => setInitRange(target.value)}
      />
      {initRange}
      <DataInput
        label="Final"
        value={finallyRange}
        onChange={({ target }) => setFinallyRange(target.value)}
      />
      {finallyRange}
    </Stack>
  )
}
