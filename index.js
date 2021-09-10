
function superbowlWin(record) {
    if (record.find(record => record.result === "W"))
    {
      return (record.find(record => record.result === "W")).year;
    }
  }

