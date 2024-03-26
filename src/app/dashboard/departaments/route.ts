type Params = {
    departaments: string
  }
   
  export async function GET(request: Request, context: { params: Params }) {
    const departaments = context.params.departaments // '1'
  }
   
  // Define params type according to your route parameters (see table below)