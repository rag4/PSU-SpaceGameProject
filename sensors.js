function sensorDeploy(x, y, map) {
    Ship.updateSupplies();

    //sensor sweep
    if(gameSettings.checkOUT_OF_BOUNDS(current_x+1, current_y-1))
    {
      if(map["array"][current_x+1][current_y-1].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x+1, current_y))
    {
      if(map["array"][current_x+1][current_y].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x+1, current_y+1))
    {
      if(map["array"][current_x+1][current_y+1].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x, current_y+1))
    {
      if(map["array"][current_x][current_y+1].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x-1, current_y+1))
    {
      if(map["array"][current_x-1][current_y+1].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x-1, current_y))
    {
      if(map["array"][current_x-1][current_y].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x-1, current_y-1))
    {
      if(map["array"][current_x-1][current_y-1].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x, current_y-1))
    {
      if(map["array"][current_x][current_y-1].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x+2, current_y-2))
    {
      if(map["array"][current_x+2][current_y-2].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x+2, current_y-1))
    {
      if(map["array"][current_x+2][current_y-1].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x+2, current_y))
    {
      if(map["array"][current_x+2][current_y].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x+2, current_y+1))
    {
      if(map["array"][current_x-2][current_y+1].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x+2, current_y+2))
    {
      if(map["array"][current_x+2][current_y+2].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x+1, current_y+2))
    {
      if(map["array"][current_x+1][current_y+2].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x, current_y+2))
    {
      if(map["array"][current_x][current_y+2].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x-2, current_y+2))
    {
      if(map["array"][current_x-2][current_y+2].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x-2, current_y+1))
    {
      if(map["array"][current_x-2][current_y+1].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x-2, current_y))
    {
      if(map["array"][current_x-2][current_y].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x-2, current_y-1))
    {
      if(map["array"][current_x-2][current_y-1].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x-2, current_y-2))
    {
      if(map["array"][current_x-2][current_y-2].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x-1, current_y-2))
    {
      if(map["array"][current_x-1][current_y-2].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x, current_y-2))
    {
      if(map["array"][current_x][current_y-2].element != '_')
      {
        return 1;
      }
      return 1;
    }

    if(gameSettings.checkOUT_OF_BOUNDS(current_x+1, current_y-2))
    {
      if(map["array"][current_x+1][current_y-2].element != '_')
      {
        return 1;
      }
      return 1;
    }
    return 0;
}
