import SearchIcon from '@mui/icons-material/Search';

import { InputField } from '../atoms/InputField';

export function SearchArticle() {
  return (
    <div>
      <SearchIcon />
      <InputField
        height="32px"
        onChange={() => console.log('search')}
        placeholder="Search Article"
        type={''}
        value={''}
      />
    </div>
  );
}
