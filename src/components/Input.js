export function Input({ onChange }) {
  return (
    <input
      type="text"
      id="nick"
      name="nickName"
      onChange={onChange}
      placeholder="Write your Nick:"
    />
  );
}
