import os
import subprocess

# Set environment variables
os.environ['NODE_ENV'] = 'production'
os.environ['PORT'] = '4000'

# Start Node.js application
def application(environ, start_response):
    try:
        # Get the current directory
        current_dir = os.path.dirname(os.path.abspath(__file__))
        
        # Start the Node.js application
        process = subprocess.Popen(
            ['node', 'dist/server/index.js'],
            cwd=current_dir,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )
        
        # Return a simple response
        status = '200 OK'
        headers = [('Content-type', 'text/plain')]
        start_response(status, headers)
        return [b'Node.js application started']
    except Exception as e:
        # Return error response
        status = '500 Internal Server Error'
        headers = [('Content-type', 'text/plain')]
        start_response(status, headers)
        return [str(e).encode()]