<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
    <title>Hawkers</title>
</head>
<body class="font-body">
    <?php 
        include("src/components/header.php");
        include("src/components/banners.php");
        include("src/components/buy.php");
        include("src/components/colaborations.php");
        include("src/components/cta.php");
        echo CTA('#', 'https://www.hawkersco.com/on/demandware.static/-/Library-Sites-Hawkers_Co_SharedLibrary/default/dw4331189c/images/homepage/DROP5-SS23/ES_2600X600_BANNER_DROP5_2023_D.jpg');
        include("src/components/collections.php");
        echo CTA('#', 'https://www.hawkersco.com/on/demandware.static/-/Library-Sites-Hawkers_Co_SharedLibrary/default/dw10fa6d50/images/homepage/FIESTA-ANIVERSARIO/2600x600_BANNER_HAWKERSX_2023_D.jpg');
        include ("src/components/footer.php")
    ?> 
    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    <script src="main.js"></script>
</body>
</html>