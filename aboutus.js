   <style>
        /* Ensure the iframe covers the full page */
        #video-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            z-index: -1; /* Sends the video behind other content */
            border: none;
        }

        /* Content styling */
        header, section, footer {
            position: relative;
            z-index: 1;
            padding: 20px;
            text-align: center;
        }

        /* Ensure text visibility */
        section {
            color: white;
            font-size: 1.2em;
        }

        h1, h2 {
            color: white;
        }
    </style>