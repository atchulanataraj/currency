function nattu($scope) {
  $scope.godvalue = 0;
  var sr,ds;
  $scope.$watch('source', function(val) {
   $scope.myname =val;
   $scope.src = '';
   $scope.dest = '';
   sr=val;
   });
   
  $scope.$watch('destin', function(val) {
   $scope.myname1 =val;
   $scope.src = '';
   $scope.dest = '';
   ds=val;
   });
   
  $scope.$watch('src', function(val) {
        if(sr=="IND" && ds=="USD")
            {
              $scope.dest = val / 60;
            }
        if(sr=="IND" && ds=="CHY")
            {
              $scope.dest = val / 9;
            }
        if(sr=="IND" && ds=="EUR")
            {
              $scope.dest = val / 80;
            }
        if(sr=="IND" && ds=="SGD")
            {
              $scope.dest = val / 48;
            }
        if(sr=="USD" && ds=="IND")
            {
              $scope.dest = val * 60;
            }
        if(sr=="USD" && ds=="CHY")
            {
              $scope.dest = val * 6.21;
            }
        if(sr=="USD" && ds=="EUR")
            {
              $scope.dest = val * 0.72;
            }
        if(sr=="USD" && ds=="SGD")
            {
              $scope.dest = val * 1.25;
            }
        if(sr=="CHY" && ds=="IND")
            {
              $scope.dest = val * 9;
            }
        if(sr=="CHY" && ds=="USD")
            {
              $scope.dest = val * 6.21;
            }
        if(sr=="CHY" && ds=="EUR")
            {
              $scope.dest = val * 0.21;
            }
        if(sr=="CHY" && ds=="SGD")
            {
              $scope.dest = val * 0.20;
            }
        if(sr=="EUR" && ds=="IND")
            {
              $scope.dest = val * 80;
            }
        if(sr=="EUR" && ds=="USD")
            {
              $scope.dest = val / 0.72;
            }
        if(sr=="EUR" && ds=="SGD")
        {
          $scope.dest = val * 1.73;
        }
        if(sr=="SGD" && ds=="IND")
        {
          $scope.dest = val * 48;
        }
        if(sr=="SGD" && ds=="USD")
        {
          $scope.dest = val / 1.25;
        }
        if(sr=="SGD" && ds=="CHY")
        {
          $scope.dest = val / 0.20;
        }
        if(sr=="SGD" && ds=="EUR")
        {
          $scope.dest = val / 1.73;
        }
        if(sr==ds)
        {
          $scope.dest = val;
        }
      
   });
  $scope.$watch('dest', function(val) {
          if(sr=="IND" && ds=="USD")
          {
            $scope.src =val * 60;
          }
          if(sr=="IND" && ds=="CHY")
          {
            $scope.src = val * 9;
          }
          if(sr=="IND" && ds=="EUR")
          {
            $scope.src = val * 80;
          }
          if(sr=="IND" && ds=="SGD")
          {
            $scope.src = val * 48;
          }
          if(sr=="USD" && ds=="IND")
          {
            $scope.src = val / 60;
          }
          if(sr=="USD" && ds=="CHY")
          {
            $scope.src = val / 6.21;
          }
          if(sr=="USD" && ds=="EUR")
              {
                $scope.src = val / 0.72;
              }
          if(sr=="USD" && ds=="SGD")
              {
                $scope.src = val / 1.25;
              }
          if(sr=="IND" && ds=="CHY")
              {
                $scope.src = val / 9;
              }
          if(sr=="CHY" && ds=="USD")
              {
                $scope.src = val / 6.21;
              }
          if(sr=="CHY" && ds=="EUR")
              {
                $scope.src = val / 0.21;
              }
          if(sr=="CHY" && ds=="SGD")
              {
                $scope.src = val / 0.20;
              }
          if(sr=="EUR" && ds=="IND")
              {
                $scope.src = val / 80;
              }
          if(sr=="EUR" && ds=="USD")
              {
                $scope.src = val * 0.72;
              }
          if(sr=="EUR" && ds=="SGD")
              {
                $scope.src = val / 1.73;
              }
          if(sr=="SGD" && ds=="IND")
          {
            $scope.src = val * 48;
          }
          if(sr=="SGD" && ds=="IND")
          {
            $scope.src = val / 48;
          }
          if(sr=="SGD" && ds=="USD")
          {
            $scope.src = val * 1.25;
          }
          if(sr=="SGD" && ds=="CHY")
          {
            $scope.src = val * 0.20;
          }
          if(sr=="SGD" && ds=="EUR")
          {
            $scope.src = val * 1.73;
          }
          if(sr==ds)
          {
            $scope.src = val;
          }
      });
}