# Sencha Env - an environment built on the node-env image that includes
# Sencha CMD 6.1.3
FROM node:6
MAINTAINER Daniel Maple <danielm@ibcos.co.uk>

ENV SENCHA_CMD_VERSION 6.1.2
ENV SENCHA_CMD_INSTALL_DIR ${SENCHA_CMD_VERSION}.103

RUN apt-get update && apt-get install -y \
    ruby \
    unzip \
    curl \
    default-jre \
 && rm -rf /var/lib/apt/lists/*

## Install sencha cmd
# Download the compressed sencha cmd archive
RUN curl -o /tmp/sencha-cmd.run.zip http://cdn.sencha.com/cmd/${SENCHA_CMD_VERSION}/no-jre/SenchaCmd-${SENCHA_CMD_VERSION}-linux-amd64.sh.zip && \
    # Extract the archive
    unzip -p /tmp/sencha-cmd.run.zip > /tmp/sencha-cmd.run && \
    # Grant execution permissions to extracted file
    chmod +x /tmp/sencha-cmd.run && \
    # Run the sencha cmd installer silently
    /tmp/sencha-cmd.run -q -Dall=true && \
    # Remove temporary files
    rm /tmp/sencha-cmd.run.zip /tmp/sencha-cmd.run

# Add sencha to PATH
ENV PATH /root/bin/Sencha/Cmd:$PATH

# Install gulp task runner
RUN npm install -g gulp-cli
