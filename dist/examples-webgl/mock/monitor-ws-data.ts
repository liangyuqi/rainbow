export const GetRobot = function (total: Number) {
  let robotList: Array<any> = []
  for (let index = 1; index <= total; index++) {
    robotList.push(
      {
        robotID: '' + index,
        robotType: '0',
        routeList: [
            {
                alarmStatus: 0,
                dir: 2,
                eventType:'',
                frameID:'',
                liftState: 0,
                mapID: 1,
                moveType: 0,
                seq: 2559665,
                speed: 3,
                theta: 0,
                timestamp: 1575532781189 + index * 10,
                x: 3009+ index * 10,
                y: 6591+ index * 10,
                z: 0
            }]
          }
    )

  }
  return robotList
}
