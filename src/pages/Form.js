import { FloatingLabelInput, RaisedButton } from "../components";

export default function Form({ data, handleChange, handleClick }) {
  return (
    <div className="container login">
      <form className="form" onSubmit={handleClick}>
        <FloatingLabelInput name="name" value={data.name || "" } onChange={handleChange}/>
        <FloatingLabelInput name="password" type="password" value={data.password || "" } onChange={handleChange}/>
        <RaisedButton type="submit" id="submit" disabled={Object.keys(data).length < 2}>SUBMIT</RaisedButton>
      </form>
    </div>
  )
}
