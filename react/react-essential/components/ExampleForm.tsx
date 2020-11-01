import React, { ChangeEventHandler, FormEventHandler, useState } from "react"

type Gender = "male" | "female" | "other"

export const ExampleForm: React.FC = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [description, setDescription] = useState("")
  const [gender, setGender] = useState<Gender>()

  const handleGenderChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    switch (e.target.value) {
      case "male":
        return setGender("male")
      case "female":
        return setGender("female")
      case "other":
        return setGender("other")
      default:
        console.error(`Unexpected input value: ${e.target.value}`)
    }
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    alert(
      `A name was submitted ${firstName} ${lastName}, ${description} ${gender}`
    )
    e.preventDefault()
  }

  return (
    <form
      style={{
        padding: 20,
      }}
      onSubmit={handleSubmit}
    >
      <div style={{ height: 30, marginBottom: 10 }}>
        <label style={{ display: "inline-block", width: 100, marginRight: 10 }}>
          FirstName:
        </label>
        <input
          type="text"
          name="firstName"
          style={{ borderRadius: 2, padding: 4 }}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div style={{ height: 30, marginBottom: 10 }}>
        <label style={{ display: "inline-block", width: 100, marginRight: 10 }}>
          LastName:
        </label>
        <input
          type="text"
          name="lastName"
          style={{ borderRadius: 2, padding: 4 }}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <label style={{ display: "inline-block", width: 100, marginRight: 10 }}>
          Description:
        </label>
        <textarea
          name="description"
          style={{ borderRadius: 2, padding: 4 }}
          cols={50}
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div style={{ height: 30, marginBottom: 10 }}>
        <label style={{ display: "inline-block", width: 100, marginRight: 10 }}>
          Gender:
        </label>
        <select name="gender" value={gender} onChange={handleGenderChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <input type="submit" value="Submit" style={{ display: "inline-block" }} />
    </form>
  )
}
