import { FcApproval } from 'react-icons/fc';

const InputCustom = ({ Label, id, Submit }) => {
  return (
    <div className="flex container mx-auto px-5  bg-gradient-to-r from-purple-500 to-pink-600 place-items-center h-15">
      <h1 className=" ">{Label}</h1>
      <form className="flex place-items-center " onSubmit={Submit}>
        <input
          id={id}
          defaultValue={0.0}
          type="number"
          step="0.001"
          className="cursor-text border-emerald-400"
          size="100"
        />
        <div className="cursor-pointer ">
          <FcApproval onClick={Submit} />
        </div>
      </form>
    </div>
  );
};
export default InputCustom;
