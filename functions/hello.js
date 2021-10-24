exports.handler = async function (event, context){
  return{
    statusCode: 200,
    body: JSON.stringify({
      name: 'COVY',
      age: 30,
      email: 'tjddlf1232@gmail.com'

    })
  }
}