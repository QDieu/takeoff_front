export const createUser = (data : {[key : string] : string}) => {
    const user = {
        id: 1,
        name: data.name,
        username: data.username,
        email: data.email,
        address: {
          street: data.street,
          suite: "",
          city: data.city,
          zipcode: data.zipcode,
          geo: {
            lat: "",
            lng: "",
          },
        },
        phone: data.phone,
        website: data.website,
        company: {
          name: "",
          catchPhrase: "",
          bs: "",
        },
      };

      return user;
}