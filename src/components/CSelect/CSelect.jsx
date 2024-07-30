export const CSelect = ({category, name, options, handler}) => {


  return (
    <select defaultValue="" name={name} onChange={handler}>
      <option disabled hidden value="">
        {category}
      </option>
      {options.map((option) => {
        return <option value={option.id} key={option.id}>{option.serviceName}</option>
      })}
    </select>
  );
};
