const sqlForPartialUpdate = require("../../utils/partialUpdate");

describe("partialUpdate()",  function() {
  it("should generate proper partial update query with 1 field", async function() {
    const { query, values } = await sqlForPartialUpdate(
      "users",
      { first_name: "Test" },
      "username",
      "testuser"
    );

    expect(query).toEqual(
      "UPDATE users SET first_name=$1 WHERE username=$2 RETURNING *"
    );

    expect(values).toEqual(["Test", "testuser"]);
  });

   it("should update a password field with a hash", async function() {
     const { query, values } = await sqlForPartialUpdate(
       "users",
       { password: "taco" },
       "username",
       "testuser"
     );

     expect(query).toEqual(
       "UPDATE users SET password=$1 WHERE username=$2 RETURNING *"
     );

     expect(values[0]).not.toEqual(["taco"]);
   });
});
