<?php
    $name = $_GET["name"];
    $mail = $_GET["mail"];
    $phone = $_GET["phone"];
    $origin = $_GET["origin"];

    if($name == "" || $mail == "" || $phone == "")
    {
        $result = array
        (
            'msg' => array('<p class="error">Por favor, llene todos los campos.</p>')
        );
        echo json_encode($result);
    }
    else
    {
        if(!strpos($mail, "@") || !strpos($mail, "."))
        {
            $result = array
            (
                'msg' => array('<p class="error">El mail no es correcto</p>')
            );
            echo json_encode($result);
        }
        else if(strlen($phone) < 8 || strlen($phone) > 10)
        {
            $result = array
            (
                'msg' => array('<p class="error">El número debe ser de 8 o 10 dígitos</p>')
            );
            echo json_encode($result);
        }
        else
        {

            $servername = "localhost";
            $username = "forex-admin";
            $password = "Ku99Y5EauzDuF8QpwZ1d";
            $dbname = "id13621001_orogold";

            $conn = new mysqli($servername, $username, $password, $dbname);
            
            if ($conn->connect_error)
            {
                die("Connection failed: " . $conn->connect_error);
            }

            $sql = "INSERT INTO formulario_landing (formulario_landing_name, formulario_landing_email, formulario_landing_phone, formulario_landing_origen) VALUES ('".$name."', '".$mail."', '".$phone."', '".$origin."')";

            if ($conn->query($sql) === TRUE)
            {
				$pixel = "<script>
						  !function(f,b,e,v,n,t,s)
						  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
						  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
						  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
						  n.queue=[];t=b.createElement(e);t.async=!0;
						  t.src=v;s=b.getElementsByTagName(e)[0];
						  s.parentNode.insertBefore(t,s)}(window, document,'script',
						  'https://connect.facebook.net/en_US/fbevents.js');
						  fbq('init', '3041280829298529');
						  fbq('track', 'Lead');
						</script>";
				$pixel .= '<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=3041280829298529&ev=Lead&noscript=1" /></noscript>';
						
                $result = array
                (
                    'msg' => array($pixel.'<p class="correct">Su registro fue satisfactorio.<br>Pronto nos pondremos en contacto con usted</p>')
                );
            }
            else
            {
                $result = array
                (
                    'msg' => array('<p class="error">Hubo un error con su registro, intente de nuevo mas tarde</p>')
                );
            }

            $conn->close();

            echo json_encode($result);
        }
    }
?>