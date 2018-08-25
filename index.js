function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('https://api.github.com/repos/:owner/:repo/forks',{
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res));
})

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
