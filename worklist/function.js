class WorksSituation{


    static finished(a) {
      if(a.includes("(x)")){
        return true;
      }return false;
    }

    static unfinished(a) {
      if(!a.includes("(x)")){
        return true;
      }return false;
    }

    static check(a) {
      if(a.every(x => x.includes("(x)"))){
        return "Isleriniz Bitti"
      } return "Isleriniz Bitmedi"
    }

}