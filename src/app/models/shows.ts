// This class is being used to To get the Shows By id , name, Status, Premiered,Rating,Image,summary.
export class Shows {

  show: {
    id: number,
    name: string,
    status: string,
    premiered: Date,
    rating: { average: number },
    image: {medium: string},
    summary: string;
  };

}
