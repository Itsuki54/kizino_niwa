import {
  useEffect,
  useState,
} from 'react';
import Select from 'react-select';

import { tags } from '@/data/tag';

type TagSelectProps = {
  setTags: (tags: string[]) => void;
};

type Option = {
  value: string;
  label: string;
};

const tagOptions: Option[] = tags.map(tag => ({
  value: tag,
  label: tag,
}));

export const TagSelect = ({ setTags }: TagSelectProps) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  useEffect(() => {
    setTags(selectedOptions.map(option => option.value));
  }, [selectedOptions, setTags]);

  return (
    <div className='w-full p-1 mx-auto'>
      <Select
        className='basic-multi-select'
        classNamePrefix='select'
        isMulti
        onChange={selected => setSelectedOptions(selected as Option[])}
        options={tagOptions}
        placeholder='タグを選択してください'
        value={selectedOptions}
      />
    </div>
  );
};
