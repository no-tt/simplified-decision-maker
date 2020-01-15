export default (config, env, helpers) => {
  if (env.isProd) {
    config.output.publicPath = "/simplified-decision-maker/";

    // use the public path in your app as 'process.env.PUBLIC_PATH'
    config.plugins.push(
      new helpers.webpack.DefinePlugin({
        "process.env.PUBLIC_PATH": JSON.stringify(
          config.output.publicPath || "/"
        ),
      })
    );
  }
};
