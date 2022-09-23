export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '632d99239a5336009e4d722c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-7umyytmf',
                  apiId: 'ec0a1abf-1d0a-490e-9dcb-6196e0df21f2'
                },
                {
                  buildHookId: '632d992398cc9409c5eefbe5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-zq74owek',
                  apiId: '448fc7f4-3de7-4f0b-adf7-bf52b1503624'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KabirKr/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-zq74owek.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
